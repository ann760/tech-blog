async function editFormHandler(event) {
  console.log("start");
  event.preventDefault();

  const id = document.querySelector('.edit-post-form').id;
  const title = document.querySelector('input[name="post-title"]').value;
  const contents = document.querySelector('textarea[name="post-contents"]')
    .value;

  if (title || contents) {
    const response = await fetch(`/api/post/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        contents,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
