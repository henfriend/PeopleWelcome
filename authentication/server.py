import json
from six.moves.urllib.request import urlopen
from functools import wraps

from flask import Flask, request, jsonify, _request_ctx_stack
from flask_cors import cross_origin
from jose import jwt

AUTH0_DOMAIN = 'dev-8dw5kczis478nxrk.us.auth0.com'
CLIENTID: 'D1MBSFAqSAo292u9TAZI3tchTuJPir5S'
SECRET: 'placeholder'
# API_AUDIENCE = YOUR_API_AUDIENCE
# ALGORITHMS = ["RS256"]

app = Flask(__name__)

@app.route('/data')
def get_time():
  
    # Returning an api for showing in  reactjs
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":x, 
        "programming":"python"
        }
  
      

# Error handler
class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code

@app.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response

<<<<<<< HEAD
    #test
=======
# Running app
if __name__ == '__main__':
    app.run(debug=True)
>>>>>>> 6e11f92 (updated routes, and formto add fetch and proxy to flask)
