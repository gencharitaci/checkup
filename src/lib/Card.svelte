<script>
export let title
export let description
export let api = null
export let img = null

let json
let err = false

if (api) {
  fetch(api)
    .then(response => response.json())
    .then(data => json = data)
    .catch(e => err = true)
}

function setError() {
  err = true
}

</script>


<div class="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 m-4">
  <div class="max-w-sm rounded overflow-hidden shadow-lg {err ? 'border-8 border-red-600' : ''}">
    <!-- <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"> -->
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div class="px-6 py-4">
        {#if img}
        <img src="{img}" alt="service test" class="block m-auto" onerror={setError}>
        {/if}
        {#if json}
        <code class="text-green-700">
          {JSON.stringify(json, null, '  ')}
        </code>
        {/if}
      </div>
    </div>
  </div>
