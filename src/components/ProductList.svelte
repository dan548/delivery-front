<script>
    import { getProductList, addNewProduct, deleteProductById } from '../api/products';
    import List, {Group, Item, Graphic, Meta, Label, Separator, Subheader, Text, PrimaryText, SecondaryText} from '@smui/list';
    import { onMount } from 'svelte';

    let selectionIndex = null;
    let prodList = [];
    let selectedProductId = 0;

    onMount(async () => {
        const res = await getProductList();
        prodList = res;
    });
</script>

<List class="product-list" twoLine bind:selectedIndex={selectionIndex}>
    {#each prodList as item}
        <Item on:SMUI:action={() => selectedProductId = item.id} selected={selectedProductId === item.id}>
            <Text>
                <PrimaryText>{item.name}</PrimaryText>
                <SecondaryText>{item.price}</SecondaryText>
            </Text>
        </Item>
    {/each}
</List>

<style>

</style>