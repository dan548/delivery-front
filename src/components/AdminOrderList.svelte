<script>
    import { addNewProduct, deleteOrderById, editOrderById, getOrderById, getOrderList } from '../api/admin_orders';
    import List, {Group, Item, Graphic, Meta, Label, Separator, Subheader, Text, PrimaryText, SecondaryText} from '@smui/list';
    import { onMount } from 'svelte';

    let selectionIndex = null;
    let orderList = [];
    let selectedOrderId = 0;

    onMount(async () => {
        const res = await getOrderList();
        orderList = res;
    });
</script>

<style>

</style>

<List class="order-list" twoLine bind:selectedIndex={selectionIndex}>
    {#each orderList as item}
        <Item on:SMUI:action={() => selectedOrderId = item.id} selected={selectedOrderId === item.id}>
            <Text>
                <PrimaryText>{item.address}</PrimaryText>
                <SecondaryText>{item.paymentType}</SecondaryText>
            </Text>
        </Item>
    {/each}
</List>