import React from "react";

function Loader() {
	return (
		<div
			className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-text-primary bg-opacity-95 backdrop-blur-sm"
			aria-label="Loading"
		>
			<div className="w-16 h-16 border-4 border-accent-primary border-t-transparent rounded-full animate-spin mb-6"></div>
			<p className="text-lg font-medium animate-pulse">Loading, please wait…</p>
		</div>
	);
}

export default Loader;
