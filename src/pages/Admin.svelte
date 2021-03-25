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

            {:else}

            {/if}
        </main>
    </AppContent>
</div>

<script>
    import Drawer, {AppContent, Content, Header, Title, Subtitle, Scrim} from '@smui/drawer';
    import Button, {Label} from '@smui/button';
    import List, {Item, Text, Graphic, Separator, Subheader} from '@smui/list';
    import ProductList from "../components/ProductList.svelte";

    let clicked = 'nothing yet';
</script>

<style>
    .drawer-container {
        display: flex;
        flex-direction: row;
        height: 100%;
    }
</style>