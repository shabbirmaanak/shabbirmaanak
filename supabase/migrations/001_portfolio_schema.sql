-- ============================================
-- Supabase Migration: Portfolio Schema
-- Project: Shabbir Maanak Portfolio
-- ============================================

-- 1. Portfolio content — single JSONB row
CREATE TABLE IF NOT EXISTS portfolio_content (
  id          INTEGER PRIMARY KEY DEFAULT 1,
  data        JSONB NOT NULL,
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Ensure only one row can exist
CREATE UNIQUE INDEX IF NOT EXISTS portfolio_content_singleton ON portfolio_content ((true));

-- 2. Contact form submissions
CREATE TABLE IF NOT EXISTS contact_messages (
  id          SERIAL PRIMARY KEY,
  fullname    TEXT NOT NULL,
  email       TEXT NOT NULL,
  subject     TEXT DEFAULT '',
  message     TEXT NOT NULL,
  sent_at     TIMESTAMPTZ DEFAULT NOW(),
  read        BOOLEAN DEFAULT FALSE
);

-- ============================================
-- Row Level Security (RLS)
-- ============================================

-- Enable RLS on both tables
ALTER TABLE portfolio_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages  ENABLE ROW LEVEL SECURITY;

-- Portfolio: anyone can read
CREATE POLICY "portfolio_public_read"
  ON portfolio_content
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Portfolio: anon can update (admin CMS uses anon key)
CREATE POLICY "portfolio_anon_update"
  ON portfolio_content
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Portfolio: anon can insert (for initial seed / upsert)
CREATE POLICY "portfolio_anon_insert"
  ON portfolio_content
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Contact messages: anyone can insert (public contact form)
CREATE POLICY "contact_public_insert"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Contact messages: anon can read (admin views them)
CREATE POLICY "contact_anon_read"
  ON contact_messages
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Contact messages: anon can update (mark as read)
CREATE POLICY "contact_anon_update"
  ON contact_messages
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);
