# NOT WORKING

# MMM-RememberTheMilk
This is a module for the [MagicMirror](https://github.com/MichMich/MagicMirror). It displays your RememberTheMilk Today list. This module uses Read access only.
https://www.rememberthemilk.com/

## Installation
1. Go to MagicMirror's `modules`.
2. Run `git clone https://github.com/patadeloso/MMM-RememberTheMilk.git`.
3. Go into the newly created directory: `cd MMM-RememberTheMilk`.
4. Run `npm install` to install the node dependencies.

## Screenshot

No Screenshot yet

## Usage

To able to use this module, make sure you have an RememberTheMilk account (*free account is fine*) and an API key.

*Please note that only today's data will be shown.*

Then add this module to your `config/config.js` file:
```javascript
modules: [
    {
        module: 'MMM-RememberTheMilk',
        position: 'top_right', // Or any other region
        header: 'RememberTheMilk', // An optional title
        config: {
            // See 'Configuration' for more information.
        }
    }
]
```

## Configuration

The following properties can be configured:

| Option        | Description   | Default  |
| ------------- |:-------------:| -----:|
| api_key                | Your RememberTheMilk API key                                   | **None, this has to be set by you** |
| api_secret  | Your RememberTheMilk API secret                              | **None, this has to be set by you** |
| api_token           | Your RememberTheMilk API token                 | **None, this has to be set by you** |
| interval              | Interval in seconds how often the data should be fetched  | 60 |

### How do I get an API key, secret, and token?
  You create the API key and secret in RememberTheMilk's WebUI. Then use the node.js example.js file for rtm.js to generate the token. You have to modify the example.js file to output the token with the other parts.
