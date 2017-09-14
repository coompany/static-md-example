jQuery(document).ready(($) => {
  let selectedChunk = CHUNKS[0];
  let loadedChunk = null;
  const chunkOptions = CHUNKS.map((chunk) => {
    return $('<option value="' + chunk + '">' + chunk + '</option>')
  });

  function onChunkLoaded(chunk) {
    loadedChunk = chunk;
    loadedChunk.decodedContent = atob(loadedChunk.content);
    $('#title').text('Editing ' + selectedChunk);
    $('#editor').val(loadedChunk.decodedContent);
  }

  $('#chunk-selector').html(chunkOptions);

  $('#chunk-selector').on('change', (evt) => {
    selectedChunk = evt.target.value;
    loadChunk(selectedChunk, onChunkLoaded);
  });

  $('#save-btn').click(() => {
    const payload = {
      message: 'updated content',
      content: btoa($('#editor').val()),
      sha: loadedChunk.sha
    };

    const username = 'acidghost';
    const password = $('#password').val();
    if (!password) {
      window.alert('no password!');
      return;
    }

    $.ajax({
      url: loadedChunk.url,
      method: 'PUT',
      data: JSON.stringify(payload),
      contentType: 'application/json',
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
      }
    }).then(() => {
      loadChunk(selectedChunk, onChunkLoaded);
    });
  });

  loadChunk(selectedChunk, onChunkLoaded);
});
