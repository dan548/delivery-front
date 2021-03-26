<script>
    import { addNewUser, deleteUserById, editUserById, getUserById, getUserList } from '../api/users';
    import List, {Group, Item, Graphic, Meta, Label, Separator, Subheader, Text, PrimaryText, SecondaryText} from '@smui/list';
    import { onMount } from 'svelte';

    let selectionIndex = null;
    let userList = [];
    let selectedUserId = 0;

    onMount(async () => {
        const res = await getUserList();
        userList = res;
    });
</script>

<List class="user-list" twoLine bind:selectedIndex={selectionIndex}>
    {#each userList as item}
        <Item on:SMUI:action={() => selectedUserId = item.id} selected={selectedUserId === item.id}>
            <Text>
                <PrimaryText>{item.login}</PrimaryText>
                <SecondaryText>{item.id}</SecondaryText>
            </Text>
        </Item>
    {/each}
</List>

<style>

</style>