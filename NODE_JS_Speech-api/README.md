# Readme

Original article can be found at:
https://www.smashingmagazine.com/2017/08/ai-chatbot-web-speech-api-node-js/?utm_source=frontendfocus&utm_medium=email#getting-a-reply-from-ai


## Setup

What isn't covered in the article is that you will need to install foreman to get this running locally:
```npm install -g foreman```

after that's done, and the app is put together, run:  
```nf start```

and start chatting nonsense.

Additionally, `.env` will need to have unique codes in them. The access token can be found in the api.ai site.

In the api.ai console view, hit the hamburger button.

That will bring out the left hand drawer. There will then be the name of your Agent with the cog icon next to the drop arrow. Clicking the cog will bring you to settings for that agent, and it's here that the Client and Developer access tokens can be copied.
