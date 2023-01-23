<script lang="ts">
  export let data: {
    title: string;
    subtitle: string;
    description?: string[];
    date?: string;
    link?: string;
    grade?: string;
  }[];
</script>

<ul>
  {#each data as entry}
    <li class="experience my-3">
      <h3 class="font-bold text-lg mb-1">{entry.title}</h3>
      <div class="flex justify-between mb-1">
        <p class="italic">{entry.subtitle}</p>
        {#if entry.date}
          <p class="italic">{entry.date}</p>
        {/if}
      </div>
      {#if entry.description}
        {#if entry.description.length > 1}
          <ul>
            {#each entry.description as description}
              <li class="list-disc ml-4">{description}</li>
            {/each}
          </ul>
        {:else}
          <p class="text-sm">{entry.description}</p>
        {/if}
      {/if}
      {#if entry.grade}
        <p class="text-sm">
          Grade: <span class="italic">{entry.grade}</span>
        </p>
      {/if}
      {#if entry.link}
        <a href={entry.link} target="_blank" rel="noopener noreferrer">
          {entry.link}
        </a>
      {/if}
      <slot name="extra" {entry} />
    </li>
  {/each}
</ul>
