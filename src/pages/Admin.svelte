<script>
    import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
    import { onMount } from "svelte";
    import ProductList from "../components/ProductList.svelte";
    import AdminOrderList from "../components/AdminOrderList.svelte";
    import UserList from "../components/UserList.svelte";
    import { getWhoAmI } from "../api/whoami";

    let clicked = 'nothing yet';

    onMount(async () => {
        const me = await getWhoAmI();
        if (!me.roles.some(role => role.name === "ROLE_ADMIN")) {
            window.location.replace("http://localhost:5000/")
        }
    });
</script>

<div class="drawer-container">
    <Drawer>
        <Content>
            <List>
                <Item href="javascript:void(0)" on:click={() => clicked = 'Orders'}>
                    <Text>Orders</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => clicked = 'Products'}>
                    <Text>Products</Text>
                </Item>
                <Item href="javascript:void(0)" on:click={() => clicked = 'Users'}>
                    <Text>Users</Text>
                </Item>
            </List>
        </Content>
    </Drawer>

    <AppContent class="app-content">
        <main class="main-content">
            {#if clicked === 'Products'}
                <ProductList/>
            {:else if clicked === 'Users'}
                <UserList/>
            {:else}
                <AdminOrderList/>
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