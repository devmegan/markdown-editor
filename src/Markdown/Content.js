const CONTENT = `# This is our new markdown editor

Content editors will be using markdown instead of html. The markdown will be saved into a content block component on the node version. 

The saved markdown will be parsed and denormalised serverside into frontend component json, that can then be consumed from the node api.

It uses this [react-simplemde-editor](https://www.npmjs.com/package/react-simplemde-editor).

## Pre-publish validation

Custom zend input filters written with [league/commonleague](https://commonmark.thephpleague.com/) can be used to parse and validate the markdown content before it is published.

This means we will be able to feedback errors to editors before they request the version to be published.`;

export { CONTENT };