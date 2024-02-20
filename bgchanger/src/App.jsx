import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { ArrowUpRight } from 'lucide-react'

function App() {
	const [color, setcolor] = useState("orange");

	return (
		<div
			className="w-screen h-screen duration-200 flex items-center justify-center "
			style={{ backgroundColor: color }}
		>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap gap-8 justify-center bg-white rounded-2xl px-3 py-2">
					<button
						className="bg-red-500 w-20 h-20 rounded-full"
						onClick={() => setcolor("red")}
					></button>
					<button
						className="bg-black-500 w-20 h-20 rounded-full"
						onClick={() => setcolor("black")}
					></button>
					<button
						className="bg-orange-500 w-20 h-20 rounded-full"
						onClick={() => setcolor("orange")}
					></button>
					<button
						className="bg-blue-400 w-20 h-20 rounded-full"
						onClick={() => setcolor("lightblue")}
					></button>
					<button
						className="bg-yellow-400 w-20 h-20 rounded-full"
						onClick={() => setcolor("yellow")}
					></button>
					<button
						className="bg-green-500 w-20 h-20 rounded-full"
						onClick={() => setcolor("lightgreen")}
					></button>
				</div>
			</div>

			<div className="  w-[300px] rounded-md border bg-white" >
				<img
					src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
					alt="Laptop"
					className="h-[200px] w-full rounded-t-md object-cover"
				/>
				<div className="p-4">
					<h1 className="inline-flex items-center text-lg font-semibold text-black">
						About Macbook &nbsp;
					</h1>
					<p className="mt-3 text-sm text-gray-600">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi, debitis?
					</p>
					<div className="mt-4">
						<span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
							#Macbook
						</span>
						<span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
							#Apple
						</span>
						<span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
							#Laptop
						</span>
					</div>
					<button
						type="button"
						className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
					>
						Read
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
