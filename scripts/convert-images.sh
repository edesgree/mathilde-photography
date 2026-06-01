#!/bin/bash

find originals -type f -name "*.jpg" | while read img; do
  out="images/full/${img#originals/}"
  out="${out%.jpg}.webp"

  mkdir -p "$(dirname "$out")"

  magick "$img" -resize 2200x2200\> -quality 82 "$out"

  
done

find originals -type f -name "*.jpg" | while read img; do
  out="images/thumbs/${img#originals/}"
  out="${out%.jpg}.webp"

  mkdir -p "$(dirname "$out")"

  magick "$img" \
    -resize 800x800\> \
    -quality 75 \
    "$out"
done