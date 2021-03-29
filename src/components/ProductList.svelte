<script>
    import { getProductList, addNewProduct, deleteProductById } from '../api/products';
    import Fab, { Icon } from '@smui/fab';
    import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';
    import IconButton from '@smui/icon-button';
    import { onMount } from 'svelte';
    import Product from "./Product.svelte";

    let selectionIndex = null;
    let prodList = [];
    let selectedProductId = 0;
    let openProductCreation = false;

    onMount(async () => {
        const res = await getProductList();
        prodList = res;
    });

    const openCreateProduct = () => {
        openProductCreation = true;
    };

    const onClickDelete = async () => {
        if (selectedProductId !== 0) {
            await deleteProductById(selectedProductId);
            const res = await getProductList();
            prodList = res;
        }
    };
</script>

<div class="list-container">
    <List class="product-list" twoLine bind:selectedIndex={selectionIndex}>
        {#each prodList as item}
            <Item on:SMUI:action={() => selectedProductId = item.id} selected={selectedProductId === item.id}>
                <Text>
                    <PrimaryText>{item.name}</PrimaryText>
                    <SecondaryText>{item.price / 100}Р</SecondaryText>
                </Text>
            </Item>
        {/each}
    </List>
    <Fab class='product-list-fab' on:click={openCreateProduct}><Icon class="material-icons">add</Icon></Fab>
    <div style="display: flex; align-items: center;">
        <IconButton class="material-icons" on:click={onClickDelete}>delete</IconButton>
    </div>
</div>
{#if openProductCreation}
    <Product bind:opened={openProductCreation}/>
{/if}

<style>
    .list-container {
        display: flex;
        flex-direction: column;
    }
</style>