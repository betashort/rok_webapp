## .htaccess

```cgi
#!/home/*ユーザー名*/miniconda3/envs/env/bin/python3.9 #Pythonのパス
# -*- coding: utf-8 -*-

import sys, os

sys.path.insert(0, '/home/betashort/anaconda3/envs/rok-api/bin') #仮想環境までのパス

os.environ['DJANGO_SETTINGS_MODULE'] = 'config.settings' #プロジェクトのsettingsまでのパス


from wsgiref.handlers import CGIHandler
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
CGIHandler().run(application)
```

## index.cgi

```text
RewriteEngine On

RewriteCond %{REQUEST_URI} !index\.cgi
RewriteCond %{REQUEST_URI} !(^/static/)
RewriteCond %{REQUEST_URI} !(^/media/)
RewriteRule ^(.*)$ /index.cgi/$1 [QSA,L]
```