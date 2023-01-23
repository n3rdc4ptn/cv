<script lang="ts">
  export let others: {
    title: string;
    subtitle: string;
    link?: string;
  }[];
</script>

<h2 class="headline">Weiteres</h2>

<section>
  {#each others as other}
    <div class="flex flex-col">
      <h3 class="text-lg font-bold">{other.title}</h3>

      <p class="">
        {other.subtitle}
      </p>
      {#if other.link}
        <a href={other.link} class="text-sm italic underline">
          {other.link}
        </a>
      {/if}
    </div>
  {/each}
</section>
