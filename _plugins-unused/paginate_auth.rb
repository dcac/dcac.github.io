
module Jekyll
 
  class Pagination < Generator
    def generate(site)
    end
  end
  # class AuthorGeneration < Generator
#   
#     
#     def generate(site)
#       site.config['authors'] = post_key_hash(site, 'author')
#     end
# 
#     ##
#     # Generates a hash using a key from a post's front-matter.
#     #
#     def post_key_hash(site, post_key)
#       hash = Hash.new { |hsh, key| hsh[key] = Array.new }
#       site.posts.each do |p|
#         # Skip post if it doesn't have the correct key
#         next unless p.data.has_key? post_key
# 
#         # Load the value for the key
#         t = p.data.fetch(post_key)
# 
#         # Add the post to the hash
#         hash[t] << p
#       end
# 
#       # Sort and return the hash
#       hash.values.map { |sortme| sortme.sort! { |a, b| b <=> a } }
#       hash
#     end
#   
#   end
 
  class AuthorPages < Generator
  
    safe true
    
    def generate(site)
#       site.config['authors'] = post_key_hash(site, 'author')
      site.pages.dup.each do |page|
        paginate(site, page) if AuthorPager.pagination_enabled?(site.config, page)
      end
#     end
#     def post_key_hash(site, post_key)
#       hash = Hash.new { |hsh, key| hsh[key] = Array.new }
#       site.posts.each do |p|
#         # Skip post if it doesn't have the correct key
#         next unless p.data.has_key? post_key
# 
#         # Load the value for the key
#         t = p.data.fetch(post_key)
# 
#         # Add the post to the hash
#         hash[t] << p
#       end
# 
#       # Sort and return the hash
#       hash.values.map { |sortme| sortme.sort! { |a, b| b <=> a } }
#       hash
     end
    
 
    def paginate(site, page)
    
      # sort authors by descending date of publish
      #author_posts = site.authors[page.data['author']].sort_by { |p| -p.date.to_f }
      author_posts = '{"Jared Young"=>[<Post: /reviews/2014/03/07/300-rise-of-an-empire>, <Post: /reviews/2014/03/04/non-stop>, <Post: /reviews/2014/02/02/labor-day>, <Post: /reviews/2014/01/30/the-croods>, <Post: /reviews/2012/07/27/the-dark-knight-rises>, <Post: /reviews/2012/04/02/goon>, <Post: /reviews/2012/02/24/warrior>], nil=>[<Post: /reviews/2014/01/28/philomena>, <Post: /reviews/2014/01/27/the-hunt>, <Post: /reviews/2014/01/25/the-square>, <Post: /reviews/2014/01/22/inside-llewyn-davis>, <Post: /reviews/2014/01/20/the-book-thief>, <Post: /reviews/2014/01/20/august-osage-county>, <Post: /reviews/2014/01/17/jack-ryan-shadow-recruit>, <Post: /reviews/2014/01/16/drug-war>, <Post: /reviews/2014/01/14/her>, <Post: /reviews/2014/01/10/nebraska>, <Post: /reviews/2014/01/09/lone-survivor>, <Post: /reviews/2014/01/02/mandela-long-walk-to-freedom>, <Post: /reviews/2013/12/30/the-secret-life-of-walter-mitty>, <Post: /reviews/2013/12/23/saving-mr-banks>, <Post: /reviews/2013/12/20/anchorman-2-the-legend-continues>, <Post: /reviews/2013/12/19/grudge-match>, <Post: /reviews/2013/12/14/2013-silver-stamps>, <Post: /reviews/2013/12/13/the-hobbit-the-desolation-of-smaug>, <Post: /reviews/2013/12/09/how-i-live-now>, <Post: /reviews/2013/12/05/out-of-the-furnace>, <Post: /reviews/2013/12/04/shifting-the-blame>, <Post: /reviews/2013/11/28/frozen>, <Post: /reviews/2013/11/26/kill-your-darlings>, <Post: /reviews/2013/11/25/im-an-old-communist-hag>, <Post: /reviews/2013/11/22/catching-fire>, <Post: /reviews/2013/11/20/living-images>, <Post: /reviews/2013/11/18/blue-is-the-warmest-colour>, <Post: /reviews/2013/11/15/miracle>, <Post: /reviews/2013/11/13/12-years-a-slave>, <Post: /reviews/2013/11/08/thor-the-dark-world>, <Post: /reviews/2013/11/07/the-counselor>, <Post: /reviews/2013/11/06/thunderstorm-the-return-of-thor>, <Post: /reviews/2013/11/05/wadjda>, <Post: /reviews/2013/10/31/vhs-2>, <Post: /reviews/2013/10/25/all-is-lost>, <Post: /reviews/2013/10/24/man-of-tai-chi>, <Post: /reviews/2013/10/23/gabrielle>, <Post: /reviews/2013/10/22/the-fifth-estate>, <Post: /reviews/2013/10/21/escape-plan>, <Post: /reviews/2013/10/18/captain-phillips>, <Post: /reviews/2013/10/15/escape-from-tomorrow>, <Post: /reviews/2013/10/14/romeo-juliet>, <Post: /reviews/2013/10/09/machete-kills>, <Post: /reviews/2013/10/08/short-term-12>, <Post: /reviews/2013/10/07/runner-runner>, <Post: /reviews/2013/10/04/gravity>, <Post: /reviews/2013/10/03/resolution>, <Post: /reviews/2013/10/02/rush>, <Post: /reviews/2013/10/01/cloudy-with-a-chance-of-meatballs-2>, <Post: /reviews/2013/09/30/rhymes-for-young-ghouls>, <Post: /reviews/2013/09/27/don-jon>, <Post: /reviews/2013/09/25/good-ol-freda>, <Post: /reviews/2013/09/20/the-art-of-the-steal>, <Post: /reviews/2013/09/19/dallas-buyers-club>, <Post: /reviews/2013/09/18/the-grand-seduction>, <Post: /reviews/2013/09/17/insidious-chapter-2>, <Post: /reviews/2013/09/13/the-act-of-killing>, <Post: /reviews/2013/09/10/riddick>, <Post: /reviews/2013/09/10/prisoners>, <Post: /reviews/2013/09/05/lee-daniels-the-butler>, <Post: /reviews/2013/09/04/getaway>, <Post: /reviews/2013/09/03/the-grandmaster>, <Post: /reviews/2013/08/30/closed-circuit>, <Post: /reviews/2013/08/27/youre-next>, <Post: /reviews/2013/08/26/blue-jasmine>, <Post: /reviews/2013/08/23/in-a-world>, <Post: /reviews/2013/08/22/lovelace>, <Post: /reviews/2013/08/21/jobs>, <Post: /reviews/2013/08/20/a-hijacking>, <Post: /reviews/2013/08/15/were-the-millers>, <Post: /reviews/2013/08/15/the-worlds-end>, <Post: /reviews/2013/08/14/planes>, <Post: /reviews/2013/08/09/elysium>, <Post: /reviews/2013/08/07/percy-jackson-sea-of-monsters>, <Post: /reviews/2013/08/06/fruitvale-station>, <Post: /reviews/2013/08/02/the-to-do-list>, <Post: /reviews/2013/08/01/only-god-forgives>, <Post: /reviews/2013/07/23/the-conjuring>, <Post: /reviews/2013/07/20/red-2>, <Post: /reviews/2013/07/17/sharknado>, <Post: /reviews/2013/07/12/grown-ups-2>, <Post: /reviews/2013/07/05/despicable-me-2>, <Post: /reviews/2013/06/28/white-house-down>, <Post: /reviews/2013/06/27/before-midnight>, <Post: /reviews/2013/06/25/we-steal-secrets-the-story-of-wikileaks>, <Post: /reviews/2013/06/21/monsters-university>, <Post: /reviews/2013/06/20/trance>, <Post: /reviews/2013/06/19/world-war-z>, <Post: /reviews/2013/06/17/the-kings-of-summer>, <Post: /reviews/2013/06/14/man-of-steel>, <Post: /reviews/2013/06/13/the-purge>, <Post: /reviews/2013/06/12/this-is-the-end>, <Post: /reviews/2013/06/11/sarah-prefers-to-run>, <Post: /reviews/2013/06/07/red-wedding-more-like-red-herring>, <Post: /reviews/2013/06/07/after-earth>, <Post: /reviews/2013/06/06/out-of-darkness-revisiting-the-wrath-of-khan>, <Post: /reviews/2013/05/31/now-you-see-me>, <Post: /reviews/2013/05/29/behind-the-candelabra>, <Post: /reviews/2013/05/27/fast-furious-6>, <Post: /reviews/2013/05/24/the-hangover-part-3>, <Post: /reviews/2013/05/16/star-trek-into-darkness>, <Post: /reviews/2013/05/15/ruby-sparks>, <Post: /reviews/2013/05/14/aftershock>, <Post: /reviews/2013/05/10/the-great-gatsby>, <Post: /reviews/2013/05/03/iron-man-3>, <Post: /reviews/2013/04/29/my-awkward-sexual-adventure>, <Post: /reviews/2013/04/26/pain-gain>, <Post: /reviews/2013/04/22/to-the-wonder>, <Post: /reviews/2013/04/19/still-mine>, <Post: /reviews/2013/04/19/oblivion>, <Post: /reviews/2013/04/16/the-incredible-burt-wonderstone>, <Post: /reviews/2013/04/12/the-place-beyond-the-pines>, <Post: /reviews/2013/04/11/42>, <Post: /reviews/2013/04/09/room-237>, <Post: /reviews/2013/04/05/evil-dead>, <Post: /reviews/2013/04/04/top-10-uncredited-heroes-of-jurassic-park>, <Post: /reviews/2013/04/03/the-host>, <Post: /reviews/2013/04/02/the-sapphires>, <Post: /reviews/2013/03/28/spring-breakers>, <Post: /reviews/2013/03/27/stoker>, <Post: /reviews/2013/03/26/side-by-side>, <Post: /reviews/2013/03/24/admission>, <Post: /reviews/2013/03/22/olympus-has-fallen>, <Post: /reviews/2013/03/20/indie-game-the-movie>, <Post: /reviews/2013/03/14/laffaire-dumont>, <Post: /reviews/2013/03/13/safety-not-guaranteed>, <Post: /reviews/2013/03/09/cloudburst>, <Post: /reviews/2013/03/08/oz-the-great-and-powerful>, <Post: /reviews/2013/03/07/the-2013-flixies>, <Post: /reviews/2013/03/06/the-boxing-girls-of-kabul>, <Post: /reviews/2013/03/01/inchallah>, <Post: /reviews/2013/02/28/kon-tiki>, <Post: /reviews/2013/02/26/how-to-survive-a-plague>, <Post: /reviews/2013/02/25/top-tweets-from-the-2013-oscars>, <Post: /reviews/2013/02/21/5-broken-cameras>, <Post: /reviews/2013/02/15/a-good-day-to-die-hard>, <Post: /reviews/2013/02/13/a-royal-affair>, <Post: /reviews/2013/02/11/identity-thief>, <Post: /reviews/2013/02/08/chasing-ice>, <Post: /reviews/2013/02/01/humpday>, <Post: /reviews/2013/01/29/searching-for-sugar-man>, <Post: /reviews/2013/01/25/frankenweenie>, <Post: /reviews/2013/01/24/the-imposter>, <Post: /reviews/2013/01/23/3the-invisible-war>, <Post: /reviews/2013/01/22/2mirror-mirror>, <Post: /reviews/2013/01/21/1the-last-stand>, <Post: /reviews/2013/01/18/zero-dark-thirty>, <Post: /reviews/2013/01/17/quartet>, <Post: /reviews/2013/01/16/jeff-who-lives-at-home>, <Post: /reviews/2013/01/15/the-impossible>, <Post: /reviews/2013/01/11/gangster-squad>, <Post: /reviews/2013/01/07/compliance>, <Post: /reviews/2013/01/02/les-miserables>, <Post: /reviews/2012/12/28/django-unchained>, <Post: /reviews/2012/12/26/jack-reacher>, <Post: /reviews/2012/12/21/2012-silver-stamps>, <Post: /reviews/2012/12/20/the-guilt-trip>, <Post: /reviews/2012/12/19/this-is-40>, <Post: /reviews/2012/12/18/hitchcock>, <Post: /reviews/2012/12/17/christmas-in-connecticut>, <Post: /reviews/2012/12/14/the-hobbit-an-unexpected-journey>, <Post: /features/2012/12/13/the-make-up-of-2012-pt-2>, <Post: /reviews/2012/12/11/nashville-shownotes-s01e08-1>, <Post: /reviews/2012/12/07/dont-you-forget-about-me>, <Post: /reviews/2012/12/04/the-strange-case-of-angelica>, <Post: /reviews/2012/12/03/nashville-shownotes-s01e07>, <Post: /reviews/2012/11/30/killing-them-softly>, <Post: /reviews/2012/11/28/anna-karenina>, <Post: /reviews/2012/11/27/the-villain>, <Post: /reviews/2012/11/26/life-of-pi>, <Post: /reviews/2012/11/24/the-sessions>, <Post: /reviews/2012/11/23/red-dawn>, <Post: /reviews/2012/11/22/the-phantom-father>, <Post: /reviews/2012/11/21/rise-of-the-guardians>, <Post: /reviews/2012/11/20/pumping-iron>, <Post: /reviews/2012/11/19/nashville-shownotes-s01e06>, <Post: /reviews/2012/11/17/five-reasons-skyfall-fell-flat>, <Post: /reviews/2012/11/16/lincoln>, <Post: /reviews/2012/11/15/holy-motors>, <Post: /reviews/2012/11/14/stay-hungry>, <Post: /reviews/2012/11/12/nashville-shownotes-s01e05>, <Post: /reviews/2012/11/09/skyfall>, <Post: /reviews/2012/11/07/stories-we-tell>, <Post: /reviews/2012/11/06/hercules-in-new-york>, <Post: /reviews/2012/11/05/nashville-shownotes-s01e04>, <Post: /reviews/2012/11/02/flight>, <Post: /reviews/2012/11/01/wreck-it-ralph>, <Post: /reviews/2012/10/31/silent-hill-revelation>, <Post: /reviews/2012/10/26/the-paperboy>, <Post: /reviews/2012/10/25/nashville-shownotes-s01e03>, <Post: /reviews/2012/10/24/arrow-shownotes-s01e01>, <Post: /reviews/2012/10/23/eddie-the-sleepwalking-cannibal>, <Post: /reviews/2012/10/22/shville-shownotes-s01e02>, <Post: /reviews/2012/10/19/inescapable>, <Post: /reviews/2012/10/17/sinister>, <Post: /reviews/2012/10/15/argo>, <Post: /reviews/2012/10/12/here-comes-the-boom>, <Post: /reviews/2012/10/11/nashville-shownotes-s01e01>, <Post: /reviews/2012/10/09/the-master>, <Post: /reviews/2012/10/05/war-witch-rebelle>, <Post: /reviews/2012/10/04/roller-town>, <Post: /reviews/2012/10/03/pitch-perfect>, <Post: /reviews/2012/10/02/hotel-transalvania>, <Post: /reviews/2012/09/30/for-a-good-time-call>, <Post: /reviews/2012/09/28/looper>, <Post: /reviews/2012/09/26/trouble-with-the-curve>, <Post: /reviews/2012/09/25/blackbird>, <Post: /reviews/2012/09/24/end-of-watch>, <Post: /reviews/2012/09/21/dredd>, <Post: /reviews/2012/09/19/miss-lovely>, <Post: /reviews/2012/09/18/seven-psychopaths>, <Post: /reviews/2012/09/17/silver-linings-playbook>, <Post: /reviews/2012/09/14/amour>, <Post: /reviews/2012/09/12/argo>, <Post: /reviews/2012/09/10/cloud-atlas>, <Post: /reviews/2012/09/07/the-words>, <Post: /reviews/2012/09/05/hit-run>, <Post: /reviews/2012/09/04/the-possession>, <Post: /reviews/2012/08/31/robot-frank>, <Post: /reviews/2012/08/29/lawless>, <Post: /reviews/2012/08/27/premium-rush>, <Post: /reviews/2012/08/23/where-do-we-go-now>, <Post: /reviews/2012/08/22/the-expendables-2>, <Post: /reviews/2012/08/21/synecdoche-new-york>, <Post: /reviews/2012/08/20/paranorman>, <Post: /reviews/2012/08/17/sparkle>, <Post: /reviews/2012/08/16/dream-house>, <Post: /reviews/2012/08/15/the-odd-life-of-timothy-green>, <Post: /reviews/2012/08/14/the-burning>, <Post: /reviews/2012/08/13/the-campaign>, <Post: /reviews/2012/08/10/the-bourne-legacy>, <Post: /reviews/2012/08/09/hope-springs>, <Post: /reviews/2012/08/08/beasts-of-the-southern-wild>, <Post: /reviews/2012/08/03/total-recall>, <Post: /reviews/2012/08/01/margaret>, <Post: /reviews/2012/07/31/the-sitter>, <Post: /reviews/2012/07/26/a-good-old-fashioned-orgy>, <Post: /reviews/2012/07/18/seeking-a-friend-for-the-end-of-the-world>, <Post: /reviews/2012/07/17/cosmopolis>, <Post: /reviews/2012/07/16/ted>, <Post: /reviews/2012/07/13/madman>, <Post: /reviews/2012/07/12/moonrise-kingdom>, <Post: /reviews/2012/07/06/the-amazing-spider-man>, <Post: /reviews/2012/07/06/savages>, <Post: /reviews/2012/06/26/brave>, <Post: /reviews/2012/06/21/thats-my-boy>, <Post: /reviews/2012/06/15/rock-of-ages>, <Post: /reviews/2012/06/14/the-hospital>, <Post: /reviews/2012/06/12/prometheus>, <Post: /reviews/2012/06/08/the-intouchables>, <Post: /reviews/2012/06/04/snow-white-and-the-huntsman>, <Post: /reviews/2012/06/04/piranha-3dd>, <Post: /reviews/2012/05/29/on-the-road>, <Post: /reviews/2012/05/25/at-to-expect-when-youre-expecting>, <Post: /reviews/2012/05/18/battleship>, <Post: /reviews/2012/05/16/paris-texas>, <Post: /reviews/2012/05/15/the-dictator>, <Post: /reviews/2012/05/14/downhill-racer>, <Post: /reviews/2012/05/11/the-avengers>, <Post: /reviews/2012/05/11/dark-shadows>, <Post: /reviews/2012/05/09/the-five-year-engagement>, <Post: /reviews/2012/05/08/safe>, <Post: /reviews/2012/05/07/shame>, <Post: /reviews/2012/05/02/the-pirates-band-of-misfits>, <Post: /reviews/2012/04/27/bernie>, <Post: /reviews/2012/04/26/the-lucky-one>, <Post: /reviews/2012/04/20/titanic-3d>, <Post: /reviews/2012/04/20/chimpanzee>, <Post: /reviews/2012/04/18/edwin-boyd-citizen-gangster>, <Post: /reviews/2012/04/16/lockout>, <Post: /reviews/2012/04/13/cabin-in-the-woods-1>, <Post: /reviews/2012/04/13/cabin-in-the-woods>, <Post: /reviews/2012/04/12/american-reunion>, <Post: /reviews/2012/03/30/wrath-of-the-titans>, <Post: /reviews/2012/03/30/friends-with-kids>, <Post: /reviews/2012/03/24/the-hunger-games>, <Post: /reviews/2012/03/21/salmon-fishing-in-yemen>, <Post: /reviews/2012/03/21/safe-house>, <Post: /reviews/2012/03/18/sxsw-postcard-under-african-skies>, <Post: /reviews/2012/03/16/sxsw-postcard-the-raid-redemption>, <Post: /reviews/2012/03/16/sxsw-postcard-shut-up-and-play-the-hits>, <Post: /reviews/2012/03/15/sxsw-postcard-21-jump-street>, <Post: /reviews/2012/03/14/sxsw-postcard-brooklyn-castle>, <Post: /reviews/2012/03/09/john-carter>, <Post: /reviews/2012/03/05/the-secret-world-of-arrietty>, <Post: /reviews/2012/03/05/project-x>, <Post: /reviews/2012/03/05/monsieur-lazhar>, <Post: /reviews/2012/03/04/the-grey>, <Post: /reviews/2012/03/04/act-of-valor>, <Post: /reviews/2012/03/03/trading-places>, <Post: /reviews/2012/03/03/the-help>, <Post: /reviews/2012/03/02/wanderlust>, <Post: /reviews/2012/03/02/the-artist>, <Post: /reviews/2012/03/01/tinker-tailor-soldier-spy>], "Christopher Redmond"=>[<Post: /reviews/2014/03/14/need-for-speed>, <Post: /reviews/2014/03/11/enemy>, <Post: /reviews/2014/02/27/the-great-beauty>, <Post: /reviews/2014/02/26/the-armstrong-lie>, <Post: /reviews/2014/02/24/3-days-to-kill>, <Post: /reviews/2014/02/21/takedown-the-dna-of-gsp>, <Post: /reviews/2014/02/12/robocop>, <Post: /reviews/2014/02/05/the-broken-circle-breakdown>, <Post: /reviews/2014/01/31/that-awkward-moment>, <Post: /reviews/2012/07/19/the-dark-knight-rises>], "christopherr"=>[<Post: /features/2012/12/12/the-make-up-of-2012-pt-1>], "Cory Hagart"=>[<Post: /reviews/2013/07/11/pacific-rim>], "Kelan Young"=>[<Post: /reviews/2014/03/06/grabbers>, <Post: /reviews/2013/09/12/atlantic-rim>], "Casey Tourangeau"=>[<Post: /reviews/2014/02/07/the-lego-movie>, <Post: /reviews/2013/12/31/american-hustle>], "caseyt"=>[<Post: /reviews/2014/03/18/filthy-gorgeous-the-bob-guccione-story>, <Post: /reviews/2014/02/17/endless-love>, <Post: /reviews/2014/02/11/the-monuments-men>, <Post: /reviews/2014/01/07/wolf-of-wall-street>], "Erin Curtin"=>[<Post: /reviews/2014/02/03/dirty-wars>], "Jennifer Mulligan"=>[<Post: /reviews/2014/02/18/cutie-and-the-boxer>, <Post: /reviews/2014/02/04/the-invisible-woman>], "Di Golding"=>[<Post: /reviews/2014/03/19/veronica-mars>, <Post: /reviews/2014/03/17/mr-peabody-sherman>, <Post: /reviews/2014/03/12/blackfish>, <Post: /reviews/2014/02/23/winters-tale>, <Post: /reviews/2014/02/22/pompeii>, <Post: /reviews/2014/02/15/20-feet-from-stardom>, <Post: /reviews/2014/02/10/vampire-academy>], "Cory Haggart"=>[<Post: /reviews/2014/02/25/lone-ranger>, <Post: /reviews/2014/02/13/jackass-presents-bad-grandpa>], "Stefan"=>[<Post: /reviews/2014/02/19/ernest-and-celestine>], "Nat Master"=>[<Post: /reviews/2014/03/02/omar>, <Post: /reviews/2014/02/28/the-wind-rises>], "Cristopher Redmond"=>[<Post: /reviews/2014/03/01/the-missing-picture>]}'
      all_posts['children'].map { |child| child['author']}
        puts child[:author]

      #puts author_posts
 
      # calculate total number of pages
      pages = AuthorPager.calculate_pages(author_posts, site.config['custom_paginate'].to_i)
 
      # iterate over the total number of pages and create a physical page for each
      (1..pages).each do |num_page|
      
        # the authorPager handles the paging and author data
        pager = AuthorPager.new(site, num_page, author_posts, page.data['author'], pages)

        if num_page > 1
          newpage = Page.new(site, site.source, '/about/writers/', page.name)
          newpage.pager = pager
          newpage.dir = File.join(page.dir, "/page#{num_page}")
          site.pages << newpage
        else
          page.pager = pager
        end
 
      end
    end
  end
  
  class AuthorPager < Pager
 
    attr_reader :author  

    def self.pagination_enabled?(config, page)
      page.name == 'index.html' && page.data.key?('author') && !config['custom_paginate'].nil?
    end
    
    # same as the base class, but includes the author value
    def initialize(site, page, all_posts, author, num_pages = nil)
      @author = author
      super site, page, all_posts, num_pages
    end
 
    # use the original to_liquid method, but add in author info
    alias_method :original_to_liquid, :to_liquid
    def to_liquid
      x = original_to_liquid
      x['author'] = @author
      x
    end
    
  end
  
  module Filters
  
    def pager_links(pager)
 
    if pager['previous_page'] || pager['next_page']
        
      html = '<div class="pager clearfix">'
      if pager['previous_page']
        
        if pager['previous_page'] == 1
          html << "<div class=\"previous\"><a href=\"/#{pager['author']}/\">&laquo; Newer posts</a></div>"
        else
          html << "<div class=\"previous\"><a href=\"/#{pager['author']}/page#{pager['previous_page']}\">&laquo; Newer posts</a></div>"
        end
  
      end
  
      if pager['next_page'] 
        html << "<div class=\"next\"><a href=\"/#{pager['author']}/page#{pager['next_page']}\">Older posts &raquo;</a></div>"
      end
      
      html << '</div>'
      html
 
    end
 
    end
  
  end
 
end