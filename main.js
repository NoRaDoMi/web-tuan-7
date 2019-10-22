async function displayTable(page) {
	const response = await fetch(`https://reqres.in/api/users?page=${page}`);
	const users = await response.json();
	// console.log(users);
	$('table tbody').empty();
	for (const user of users.data) {
		$('table tbody').append(`
            <tr>
                <th scope="row">${user.id}</th>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td>
                    <img src="${user.avatar}" alt="${user.email}" class="img-thumbnail">
                </td>
            </tr>`);
	}
	let total_pages = users.total_pages;

	function doSomething(total_pages) {
		$('.pagination').empty();
		$('.pagination').append(`<li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        </a>
        </li>`);
		for (let index = 0; index < total_pages; index++) {
			$('.pagination')
				.append(`<li class="page-item"><a class="page-link" href="javascript:void(0)" onclick="displayTable(${index +
				1})">${index + 1}</a></li>
            `);
		}
		$('.pagination').append(`<li class="page-item">
        <a class="page-link" href="javascript:void(0)" ưssaria-label="Previous">
        <span aria-hidden="true">&raquo;</span>
        </a>
        </li>`);
	}
	doSomething(total_pages);
}
