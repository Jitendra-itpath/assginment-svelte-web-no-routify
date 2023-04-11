<script lang="ts">
    
    import { onDestroy, onMount } from 'svelte';
    let counter:number = 1;
    function changeSlide(n) {
        showDivs(counter += n);
    }
    function showDivs(n: number):void {
        var x = document.getElementsByClassName("mySlides");
        (n > x.length)? counter = 1 : '';
        (n < 1)? counter = x.length : '';
        for (let i = 0; i < x.length; i++) {
            (x[i] as HTMLDivElement).style.display = "none";
        }
        (x[counter-1] as HTMLDivElement).style.display = "block";
    }
    let interval = null;
    onMount(async () => {
		interval  = setInterval(() => changeSlide(1), 1500);
	});
    onDestroy(()=>clearInterval(interval))

</script>
<!-- svelte-ignore a11y-missing-attribute -->
<div class="md:h-96 h-120 w-full overflow-hidden">
    <div class="flex transition-transform duration-150 ease-in relative z-[-2]">
        <div class="w-screen shrink-0 mySlides">
            <img class="w-full h-96" src="../images/about-us2.JPG">
        </div>
        <div class="w-screen shrink-0 mySlides">
            <img class="w-full h-96 " src="../images/about-us.png">
        </div>
        <div class="w-screen shrink-0 mySlides">
            <img class="w-full h-96" src="../images/about-us1.png">
        </div>
    </div>
</div>

<div class="home mt-5 md:mx-8 mx-4">
    <div class="mt-10">
        <p class="md:text-5xl text-3xl font-bold mb-4 text-neutral-600 leading-loose">About US</p>
        <p class="mb-4 text-xl text-neutral-600 text-justify">
            Hello, my name is Jitendra Chaudhary, and I am presently working as a intern in full stack web development at It Path Solutions.
        </p>
        <p class="md:text-5xl text-3xl font-bold mb-4 text-neutral-600 leading-loose">About this Project</p>
        <p class="mb-4 text-xl text-neutral-600 text-justify">
            This website project was created using Svelte JavaScript and TS. The project's Master Page will be shared indefinitely. If the user taps on "Home component," only the central part changes and displays the "Home component" information.
        </p>
        <p class="mb-4 text-xl text-neutral-600 text-justify">
            Because this project does not use external memory, when you reload the page, all new data entered will be removed. Instead, it demonstrates a svelte store example and how it is used in a project.
        </p>
    </div>
</div>