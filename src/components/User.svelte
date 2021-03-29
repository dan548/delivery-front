<script>
    import { addNewUser } from '../api/users';
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';
    const handleSubmit = () => {
        const request = {
            login: login,
            password: password,
            roles: selected
        };
        addNewUser(request);
        opened = false;
    };
    const handleClose = () => {
        opened = false;
    };
    export let opened = false;

    let options = [
        {
            name: 'ADMIN',
            disabled: false
        },
        {
            name: 'CLIENT',
            disabled: false
        },
        {
            name: 'DELIVERY',
            disabled: false
        }
    ];
    let selected = ['CLIENT'];
    let login = '';
    let password = '';
</script>

<input bind:value={login}>
<input bind:value={password} type="password">
{#each options as option}
    <FormField>
        <Checkbox bind:group={selected} value={option.name} disabled={option.disabled} />
        <span slot="label">{option.name}{option.disabled ? ' (disabled)' : ''}</span>
    </FormField>
{/each}
<button on:click={handleSubmit}>Submit</button>
<button on:click={handleClose}>Close</button>