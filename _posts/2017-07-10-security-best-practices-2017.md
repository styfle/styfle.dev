---
slug: 'security-best-practices-2017'
title: 'Web Security Best Practices in 2017'
date: '2017-07-10T09:30:00.000Z'
---

I'm no security expert, but I had some fun upgrading this website to use some security "Best Practices" for 2017 and I'll show you how to do the same.

I recently found out about [Mozilla Observatory][Observatory] and ran my website through the tool. The results were depressing…a big, fat, ugly **F**. For those of you not familiar with [grading in the US][Grading], an F is the lowest grade possible. It’s like a punch in the face to my pride.

![Observatory results for ceriously.com](https://res.cloudinary.com/ceriously/image/upload/f_auto/v1588546037/blog/observatory-f.png)

Okay, well every day is a learning experience so let’s dive a bit deeper and maybe you can learn something new too!

### Let’s Get Secure

By now, you probably already have a free HTTPS certificate from the wonderful [Let’s Encrypt][LetsEncrypt] organization or another reputable Certificate Authority. But HTTPS is just one step in securing your website.

[Mozilla Observatory][Observatory] provides a whole suite of tests to check your website for best practices such as HSTS, security related headers, and sub-resource integrity for any external assets. It will give you a score out of 100 and a letter grade to bolster your self confidence.

The reason for my F was ignorance. None of these features were implemented and I received a mere 5/100 score on their scale. My goal was to hit 90, which is considered an **A**.

Try it on your website now by visiting [https://observatory.mozilla.org][Observatory]

How did you do? If you’re like me, you might not be constantly updating your website, blog, or app so maybe your website failed too. No worries.

If you are using Apache as a web server, you can just grab the following `.htaccess` file that I whipped up and drop it in your web directory.

```apache
## Set security headers per https://observatory.mozilla.org
Header set Strict-Transport-Security "max-age=15768000" env=HTTPS
Header set Content-Security-Policy "frame-ancestors 'self'"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set X-Content-Type-Options "nosniff"

## Add some rewrite rules per https://stackoverflow.com/a/13997498/266535
RewriteEngine On

## If https is missing, redirect to https
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=302]

## If www is missing, redirect to www
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=302]

## Anthing with .git is forbidden and halts rewrites
RewriteRule \.git - [F,L]

## Hide the config.php file and halt rewrites
RewriteRule config\.php - [F,L]

#Gzip
<ifmodule mod_deflate.c>
AddOutputFilterByType DEFLATE text/text text/html text/plain text/xml text/css application/x-javascript application/javascript text/javascript
</ifmodule>
#End Gzip

# BEGIN cache
<ifModule mod_expires.c>
ExpiresActive On
ExpiresDefault "access plus 5 seconds"
ExpiresByType image/x-icon "access plus 604800 seconds"
ExpiresByType image/jpeg "access plus 604800 seconds"
ExpiresByType image/png "access plus 604800 seconds"
ExpiresByType image/gif "access plus 604800 seconds"
ExpiresByType image/svg+xml "access plus 604800 seconds"
ExpiresByType text/css "access plus 604800 seconds"
ExpiresByType text/javascript "access plus 216000 seconds"
ExpiresByType application/javascript "access plus 216000 seconds"
ExpiresByType application/x-javascript "access plus 216000 seconds"
ExpiresByType text/html "access plus 600 seconds"
ExpiresByType application/xhtml+xml "access plus 600 seconds"
</ifModule>
# END Cache
```

The headers are taken straight from the Observatory results where you can read more about the intent and security implications. You might want to change  the Content Security Policy to be a little more strict and protect against XSS if you allow user input on your website.

Below the headers, there is a redirect to make sure the browser is always redirected to `https://www.*` This will make Google (and your visitors) hit the secure www sub-domain. This is good for security, and good for SEO.

I also changed `<script>` tag to include a sub-resource integrity which will avoid executing a malicious script if the CDN is compromised. This was easy because the jQuery CDN already supports this feature and provides the hash on their download page.

```html
<script src=”https://code.jquery.com/jquery-2.2.4.min.js" integrity=”sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=” crossorigin=”anonymous”></script>
```

If your CDN doesn't provide this information, you can use a tool like [SRI Hash Generator](https://www.srihash.org/).

That wasn’t so bad. With the additional headers and one line of HTML, Observatory is reporting the coveted green **A** with a score of *90*!

![Grade A](https://res.cloudinary.com/ceriously/image/upload/f_auto/v1588546037/blog/observatory-a.png)

### Compression and Caching
Now that your website is secure, why not make it fast too?

Take a look at the `<ifmodule>` checks in the `.htaccess` file above.

The *deflate* header will compress assets such as html, css, and js before sending it over the network. This means first-time visitors will see your content faster.

The *expires* header will tell the browser to cache the assets for several days since they likely don’t change often enough to warrant a round trip to the server. This means that returning visitors will see your content really fast.

Adding these two settings gave me a 94/100 from [Google PageSpeed Insights][PageSpeed] on Desktop. Try it on your website and see how you do!

[Observatory]: https://observatory.mozilla.org
[Grading]: https://en.wikipedia.org/wiki/Academic_grading_in_the_United_States
[LetsEncrypt]: https://letsencrypt.org
[PageSpeed]: https://developers.google.com/speed/pagespeed/insights/