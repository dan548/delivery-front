<script>
    import { addNewProduct } from '../api/products';
    const handleSubmit = event =>  {
        const request = {
            name: event.target.name.value,
            price: event.target.price.value
        };
        addNewProduct(request);
        opened = false;
    };
    const handleClose = () => {
        opened = false;
    };
    export let opened = false;
</script>

<form on:submit|preventDefault="{handleSubmit}" class="product-form">
    <label for="name">Name</label>
    <input required type="text" id="name" />

    <label for="price">Price</label>
    <input required type="number" id="price" />

    <button type="submit">Submit</button>
</form>
<button on:click={handleClose}>Close</button>

<style>

</style>