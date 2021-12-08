# ⚙️ YouTube scripts

> Scripts for my channel [FunkyVal](https://www.youtube.com/FunkyVal).

## Installation

```sh
cd scripts
npm install

cat > config.json << EOF
{
  "apiKey": "",
  "clientId": "",
  "clientSecret": ""
}
EOF
```

## Usage

Pull video descriptions from YouTube API:

```sh
make pull
```

Make sure to commit them after.

Otherwise, if making edits to existing descriptions in the files, keep
them uncommitted and to propagate the changes on YouTube:

```sh
make push
```

You can commit them after.

## Known issues

YouTube Studio [will not reflect](https://issuetracker.google.com/issues/199185674)
a description updated via the API for the next 24 hours or so because of
the way they cache this kind of data.

This means that if updating the description through YouTube Studio in
the meantime, you're gonna revert changes made through the API earlier.

Other than that, the actual description on the YouTube video player is
updated instantly.
