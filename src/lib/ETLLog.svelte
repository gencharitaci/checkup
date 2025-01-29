<script>
  /**
   * @type {any[]}
   */
  let rows = [];

  fetch("https://mcmap.org/api2/v1/query/etl_status?columns=*&sort=table_name")
    .then((response) => response.json())
    .then((json) => {
      rows = json;
      console.log(rows);
    });

  /**
   * @param {string} status
   */
  function highlight(status) {
    console.log(status);
    return status !== "success" ? "highlight" : "";
  }
</script>

<table class="table-component table-auto w-full mt-8">
  <thead>
    <tr class="border-b-2 border-blue-500">
      <th class="uppercase text-left px-4 py-2 text-gray-600">Script</th>
      <th class="uppercase text-left px-4 py-2 text-gray-600">Date</th>
      <th class="uppercase text-left px-4 py-2 text-gray-600 text">Status</th>
    </tr>
  </thead>
  <tbody>
    {#each rows as row, idx}
      <tr
        class={row.status.toUpperCase().indexOf("ERROR") !== -1 ||
        row.status === "failure"
          ? "highlight"
          : ""}
      >
        <td data-label="script" class="px-4 py-2">{row.table_name}</td>
        <td data-label="date" class="px-4 py-2"
          >{new Date(row.update_time).toLocaleString()}</td
        >
        <td data-label="status" class="px-4 py-2">{row.status}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .highlight {
    @apply bg-red-700 text-white;
  }

  @media screen and (max-width: 639px) {
    .table-component thead {
      display: none;
    }

    .table-component tr {
      display: block;
      margin: 0.75rem 0;
      box-shadow:
        0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      border-radius: 0.25rem;
      /* @apply block my-3 shadow rounded; */
    }

    .table-component td {
      display: block;
      text-align: right;
      /* @apply block text-right; */
    }

    .table-component td:before {
      content: attr(data-label);
      text-transform: uppercase;
      float: left;
      font-weight: bold;
      /* @apply uppercase float-left font-bold; */
    }
  }
</style>
