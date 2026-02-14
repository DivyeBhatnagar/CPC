#!/bin/bash

# Update navbar in activities.html, team.html, join.html, contact.html
for file in activities.html team.html join.html contact.html; do
  # Replace navbar
  sed -i '' 's|<div class="text-2xl font-bold tracking-tight">CPC</div>|<a href="index.html" class="flex items-center">\n                    <img src="Media/Logo_Web.png" alt="CPC Logo" class="logo-img">\n                </a>|g' "$file"
  
  # Update mobile menu background
  sed -i '' 's|bg-\[#111827\]/95|bg-black/95 border-t border-white/5|g' "$file"
  
  # Update mobile menu button
  sed -i '' 's|<button id="mobile-menu-btn" class="md:hidden">|<button id="mobile-menu-btn" class="md:hidden text-white">|g' "$file"
  
  # Update px-6 to px-4 sm:px-6 in navbar
  sed -i '' 's|<div class="max-w-7xl mx-auto px-6 py-4">|<div class="max-w-7xl mx-auto px-4 sm:px-6 py-4">|g' "$file"
  
  # Add text-lg to mobile menu links
  sed -i '' 's|<a href="\([^"]*\)" class="block nav-link">|<a href="\1" class="block nav-link text-lg">|g' "$file"
done

echo "Navbar updates complete"
