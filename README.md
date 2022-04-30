# ⚙️ YouTube scripts

> Scripts for my [YouTube channel](https://www.youtube.com/FunkyVal).

## Overview

I use those scripts to keep a local copy of all my YouTube video
descriptions. They're pulled from the YouTube API with `make pull` and
you can edit them in place (using Vim, sed, etc.) and push the updated
descriptions using `make push`.

This is especially convenient to mass update descriptions, e.g. the
short intro I write in there or some of the recurring links.

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

make auth
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

## Example

```sh
# Replace some text by a link
sed -i 's,Example,https://example.com/,;s,Something,https://example.com,' videos/*.description

# Prepend some text with other text
sed -i 's,🌈 Instagram,☕ Buy me a coffee! https://ko-fi.com/funkyval\n🌈 Instagram,' videos/*.description

# Delete a line that starts with some text as well as the next line
sed -i '/^Some text/,+1d' videos/*.description
```

## Known issues

YouTube Studio [will not reflect](https://issuetracker.google.com/issues/199185674)
a description updated via the API for the next 24 hours or so because of
the way they cache this kind of data.

This means that if updating the description through YouTube Studio in
the meantime, you're gonna revert changes made through the API earlier.

Other than that, the actual description on the YouTube video player is
updated instantly.
