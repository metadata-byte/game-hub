# Metadata Game Hub

Media Data Hub is designed for you to own the metadata of your game.


## Setup

### Minimal

1. Clone this repository.
2. Download PocketBase from [release page](https://github.com/pocketbase/pocketbase/releases) to the folder that contains `pb_migrations`.

```
pocketbase serve --http=0.0.0.0:8080
```

### Docker

```
version: "3"

services:
  metadata-byte:
    image: ghcr.io/metadata-byte/game-hub:latest
    restart: unless-stopped
    ports:
      - 8080:8080
    volumes:
      - data:/app/pb_data

volumes:
  data:
```

## Configuration

See [PocketBase](https://pocketbase.io/docs/going-to-production/).

By default, `list` and `view` API are set to `@request.auth.id != ""` which mean you need to use a user in `user` collection.
Other, API operations need to use a admin user.
