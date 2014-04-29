# encoding: utf-8
#
# Title:
# ======
# Jekyll to JSON Generator
#
# Description:
# ============
# A plugin for generating JSON representations of your
# site content for easy use with JS MVC frameworks like Backbone.
#
# Author:
# ======
# Jezen Thomas
# jezenthomas@gmail.com
# http://jezenthomas.com


module Jekyll

  require 'json'

  class JSONGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # Converter for .md > .html
      converter = site.getConverterImpl(Jekyll::Converters::Markdown)

      # Iterate over all posts
      site.posts.each do |post|

        # Encode the HTML to JSON
        hash = { "content" => converter.convert(post.content)}
        title = post.title.downcase.tr(' ', '-').delete("’!")

        # Start building the path
        path = "_site/dist/"

        # Add categories to path if they exist
        if (post.data['categories'].class == String)
          path << post.data['categories'].tr(' ', '/')
        elsif (post.data['categories'].class == Array)
          path <<  post.data['categories'].join('/')
        end

        # Add the sanitized post title to complete the path
        path << "/#{title}"

        # Create the directories from the path
        FileUtils.mkpath(path) unless File.exists?(path)

        # Create the JSON file and inject the data
        f = File.new("#{path}/raw.json", "w+")
        f.puts JSON.generate(hash)
      end

    end

  end

end