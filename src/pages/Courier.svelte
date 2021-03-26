<script>
    import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
    import List, {Group, Item, Graphic, Meta, Label, Separator, Subheader, Text, PrimaryText, SecondaryText} from '@smui/list';
    import { onMount } from "svelte";
    import { getWhoAmI } from "../api/whoami";
    import { getMyOrderList, getVacantOrderList } from "../api/courier_orders";

    let clicked = 'nothing yet';
    let myList = [];
    let vacantList = [];

    let myOrderSelectionIndex = null;
    let vacantOrderSelectionIndex = null;

    let mySelectedOrderId = 0;
    let vacantSelectedOrderId = 0;

    const loadMyOrders = async () => {
        const orders = await getMyOrderList();
        myList = orders;
    };

    const loadVacantOrders = async () => {
        const orders = await getVacantOrderList();
        vacantList = orders;
    };

    onMount(async () => {
        const me = await getWhoAmI();
        if (!me.roles.some(role => role.name === "ROLE_DELIVERY")) {
            window.location.replace("http://localhost:5000/")
        }
    });
</script>

<div class="drawer-container">
    <Drawer>
        <Content>
            <List>
                <Item href="javascript:void(0)" on:click={() => {
                    clicked = 'My';
                    loadMyOrders();
                }}>
                    <Text>My orders</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => {
                    clicked = 'Vacant';
                    loadVacantOrders();
                }}>
                    <Text>Vacant orders</Text>
                </Item>
            </List>
        </Content>
    </Drawer>

    <AppContent class="app-content">
        <main class="main-content">
            {#if clicked === 'My'}
                <List class="my-order-list" twoLine bind:selectedIndex={myOrderSelectionIndex}>
                    {#each myList as item}
                        <Item on:SMUI:action={() => mySelectedOrderId = item.id} selected={mySelectedOrderId === item.id}>
                            <Text>
                                <PrimaryText>{item.address}</PrimaryText>
                                <SecondaryText>{item.paymentType}</SecondaryText>
                            </Text>
                        </Item>
                    {/each}
                </List>
            {:else if clicked === 'Vacant'}
                <List class="vacant-order-list" twoLine bind:selectedIndex={vacantOrderSelectionIndex}>
                    {#each vacantList as item}
                        <Item on:SMUI:action={() => vacantSelectedOrderId = item.id} selected={vacantSelectedOrderId === item.id}>
                            <Text>
                                <PrimaryText>{item.address}</PrimaryText>
                                <SecondaryText>{item.paymentType}</SecondaryText>
                            </Text>
                        </Item>
                    {/each}
                </List>
            {/if}
        </main>
    </AppContent>
</div>

<style>
    .drawer-container {
        display: flex;
        flex-direction: row;
        height: 100%;
    }
</style>