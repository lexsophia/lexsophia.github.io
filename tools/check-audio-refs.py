#!/usr/bin/env python3
"""Check that every audio/*.mp3 referenced by the app exists in audio/.

Usage: python3 tools/check-audio-refs.py
Exit code 1 if any referenced file is missing.
"""
import os
import re
import sys
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCES = ["index.html", os.path.join("assets", "lexsophia-data.js")]

refs = set()
for rel in SOURCES:
    path = os.path.join(ROOT, rel)
    if os.path.exists(path):
        with open(path, encoding="utf-8", errors="ignore") as fh:
            refs |= set(re.findall(r"audio/([\w.\-]+\.mp3)", fh.read()))

audio_dir = os.path.join(ROOT, "audio")
have = set(os.listdir(audio_dir)) if os.path.isdir(audio_dir) else set()
missing = sorted(refs - have)

print(f"referenced: {len(refs)}  present: {len(have)}  missing: {len(missing)}")
if missing:
    print("missing by part:", dict(Counter(m.split("-")[0] for m in missing)))
    for name in missing:
        print("  MISSING", name)
    sys.exit(1)
print("OK: all referenced audio files exist.")
