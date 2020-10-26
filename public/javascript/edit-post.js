async function editFormHandler(event) {
  event.preventDefault();

  const response = await fetch("/api/posts/:id", {
    method: "PUT",
    body: JSON.stringify({
        title: req.body.title,
        contents: req.body.contents
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
