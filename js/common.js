const converter = new showdown.Converter();

const CHUNKS = ['chunk-1', 'chunk-2', 'chunk-3'];
const CONTENTS_URL = 'https://api.github.com/repos/coompany/static-md-example/contents';

function chunkPath(chunk) {
  return '/chunks/' + chunk + '.md';
}

function loadChunk(chunk, cb) {
  const url = CONTENTS_URL + chunkPath(chunk);
  $.get(url).then(cb);
}
