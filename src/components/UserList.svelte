<script>
    import {addNewUser, deleteUserById, editUserById, getUserById, getUserList} from '../api/users';
    import Fab, {Icon} from '@smui/fab';
    import List, {
        Group,
        Item,
        Graphic,
        Meta,
        Label,
        Separator,
        Subheader,
        Text,
        PrimaryText,
        SecondaryText
    } from '@smui/list';
    import IconButton from '@smui/icon-button';
    import {onMount} from 'svelte';
    import User from "./User.svelte";

    let selectionIndex = null;
    let userList = [];
    let selectedUserId = 0;
    let openUserCreation = false;

    onMount(async () => {
        const res = await getUserList();
        userList = res;
    });

    const openCreateUser = () => {
        openUserCreation = true;
    };

    const onClickDelete = async () => {
        if (selectedUserId !== 0) {
            await deleteUserById(selectedUserId);
            const res = await getUserList();
            userList = res;
        }
    };
</script>

<div class="list-container">
    <List class="user-list" threeLine bind:selectedIndex={selectionIndex}>
        {#each userList as item}
            <Item on:SMUI:action={() => selectedUserId = item.id} selected={selectedUserId === item.id}>
                <Text>
                    <PrimaryText>{item.login}</PrimaryText>
                    <SecondaryText>{item.id}</SecondaryText>
                    <SecondaryText>{item.roles.map(r => r.name.slice(5).toLowerCase())}</SecondaryText>
                </Text>
            </Item>
        {/each}
    </List>
    <Fab class='user-list-fab' on:click={openCreateUser}><Icon class="material-icons">add</Icon></Fab>
    <div style="display: flex; align-items: center;">
        <IconButton class="material-icons" on:click={onClickDelete}>delete</IconButton>
    </div>
</div>
{#if openUserCreation}
    <User bind:opened={openUserCreation}/>
{/if}

<style>

</style>