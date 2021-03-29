<script>
    import List, {Group, Item, Graphic, Meta, Label, Separator, Subheader, Text, PrimaryText, SecondaryText} from '@smui/list';
    import IconButton from '@smui/icon-button';
    import {onMount} from "svelte";
    import {getProductList} from "../api/products";

    let prodList = [];
    let selectionIndex = null;
    let selectedProductId = 0;
    let quantity = 0;

    onMount(async () => {
        const res = await getProductList();
        prodList = res;
    });
</script>

<div class="order-making">
    <List class="product-list" twoLine singleSelection bind:selectedIndex={selectionIndex}>
        {#each prodList as item}
            <Item on:SMUI:action={() => (selectedProductId = item.id)}
                  selected={selectedProductId === item.id}>
                <Text>
                    <PrimaryText>{item.name}</PrimaryText>
                    <SecondaryText>{item.price}</SecondaryText>
                </Text>
            </Item>
        {/each}
    </List>
    <div class="cart-block">
        <label for="quantity">quantity</label>
        <input type="number" bind:value={quantity} min=0 id="quantity">
        <div style="display: flex; align-items: center;">
            <IconButton class="material-icons" on:click={onClickDelete}>delete</IconButton>
        </div>
    </div>
</div>

<style>

</style>