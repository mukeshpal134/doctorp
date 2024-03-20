

function Nav(){
    return(
        <div className="main flex items-center justify-between px-9 h-16 text-white bg-emerald-800/90">
            <div className="left ">
                {/* <img src={require("../images/stethoscope.png")} alt="logo" /> */}
                <h2 className="font-bold text-2xl">DOCTOR+</h2>
            </div>
            <div className="right gap-5 flex items-center justify-evenly">
                <div className="flex items-center">
                {/* <div class="relative mb-4 flex flex-wrap items-stretch">
                    <span
                        class="flex items-center bg-white whitespace-nowrap rounded-s  px-3 py-[0.25rem] text-center text-base font-normal "
                        id="basic-addon1"
                        >@</span>
                    <input
                        type="text"
                        class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal text-surface outline-none transition duration-200 ease-in-out "
                        placeholder="Enter…"
                         />
                    </div> */}
                     <input className="search rounded p-2 h-8 w-96" type="text" placeholder="Enter…" />
                     
                </div>
                <div className="flex items-center justify-evenly gap-3">
                <ul className='flex gap-4 no-underline'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Contect</li>
                </ul>
                <button className="btn text-black font-medium bg-white rounded px-3 py-1 ">LOGIN</button>
                </div>
            </div>
        </div>
    );
}

export default Nav;