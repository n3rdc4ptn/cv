<script lang="ts">
  export let certificates: {
    title: string;
    subtitle: string;
    date: string;
    verification: string;
  }[];
</script>

<h2 class="headline">Zertifikate</h2>

<section>
  <ul>
    {#each certificates as certificate}
      <li class="my-2">
        <h3 class="font-bold text-lg">{certificate.title}</h3>
        <div class="flex justify-between">
          <p>{certificate.subtitle}</p>
          <p class="italic">{certificate.date}</p>
        </div>
        <p>
          Verification: <span class="italic">{certificate.verification}</span>
        </p>
      </li>
    {/each}
  </ul>
</section>
