import React from 'react'

export default function HeroSection() {
    return (
        <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-48 flex justify-center items-center">
            <div className="text-center space-y-2">
                <h1 className="text-white text-3xl">Welcome from my library</h1>
                <p className="text-gray-300 text-sm">A place where you can store and mange your books.</p>
            </div>
        </div>
    )
}
