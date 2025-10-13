"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    MessageCircle,
    Send,
    X,
    User,
    Bot,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Minimize2,
    Maximize2,
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

interface Message {
    id: string
    content: string
    sender: "user" | "bot"
    timestamp: Date
    type?: "text" | "action"
    actions?: Array<{
        label: string
        icon?: React.ReactNode
        url?: string
        action?: () => void
    }>
}

const quickActions = [
    { label: "Qui êtes-vous ?", icon: <User className="w-4 h-4" /> },
    { label: "Vos projets", icon: <ExternalLink className="w-4 h-4" /> },
    { label: "Contact", icon: <Mail className="w-4 h-4" /> },
    { label: "Compétences", icon: <Bot className="w-4 h-4" /> },
]

const socialLinks = [
    { label: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com/diranecode" },
    { label: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, url: "www.linkedin.com/in/dirane-mekem-63b588273" },
    { label: "Email", icon: <Mail className="w-4 h-4" />, url: "mailto:diranemekem@gmail.com" },
    { label: "WhatApp", icon: <FaWhatsapp className="w-4 h-4" />, url: "https://wa.me/237697609387?text=Bonjour%Dirane👋" },
]

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            content: "Salut ! 👋 Je suis ravi de vous accueillir sur mon portfolio. Comment puis-je vous aider aujourd'hui ?",
            sender: "bot",
            timestamp: new Date(),
            type: "action",
            actions: socialLinks,
        },
    ])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const getBotResponse = (userMessage: string): Message => {
        const lowerMessage = userMessage.toLowerCase()

        if (lowerMessage.includes("qui") || lowerMessage.includes("vous") || lowerMessage.includes("présent")) {
            return {
                id: Date.now().toString(),
                content:
                    "Je suis un développeur passionné avec plus de 2 ans d'expériences en développement web. Je me spécialise dans React, Next.js, l'IA et les technologies modernes. J'aime créer des expériences utilisateur exceptionnelles ! 🚀",
                sender: "bot",
                timestamp: new Date(),
            }
        }

        if (lowerMessage.includes("projet") || lowerMessage.includes("travail") || lowerMessage.includes("réalisation")) {
            return {
                id: Date.now().toString(),
                content: "Voici quelques-uns de mes projets récents que je suis fier de partager avec vous :",
                sender: "bot",
                timestamp: new Date(),
                type: "action",
                actions: [
                    { label: "Site web clinique", icon: <ExternalLink className="w-4 h-4" />, url: "https://www.cliniquesaintemonique.com/" },
                    { label: "Caline House", icon: <ExternalLink className="w-4 h-4" />, url: "https://www.calinehouse.com/" },
                    { label: "Build Together Group", icon: <ExternalLink className="w-4 h-4" />, url: "https://buildtogether-group.com/" },
                    { label: "Site e-commerce", icon: <ExternalLink className="w-4 h-4" />, url: "https://mr-promo.vercel.app/" },
                    { label: "CRM entreprise", icon: <ExternalLink className="w-4 h-4" />, url: "https://crm.buildtogether-group.com" },
                ],
            }
        }

        if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("joindre")) {
            return {
                id: Date.now().toString(),
                content: "Parfait ! Voici comment vous pouvez me contacter :",
                sender: "bot",
                timestamp: new Date(),
                type: "action",
                actions: socialLinks,
            }
        }

        if (lowerMessage.includes("compétence") || lowerMessage.includes("technologie") || lowerMessage.includes("stack")) {
            return {
                id: Date.now().toString(),
                content:
                    "Mes principales compétences incluent : React, NExt.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, Figma et bien plus encore. Je suis toujours en train d'apprendre de nouvelles technologies ! 💻",
                sender: "bot",
                timestamp: new Date(),
            }
        }

        return {
            id: Date.now().toString(),
            content:
                "C'est une excellente question ! N'hésitez pas à me demander plus d'informations sur mes projets, mes compétences, ou comment me contacter. Je suis là pour vous aider ! 😊",
            sender: "bot",
            timestamp: new Date(),
        }
    }

    const handleSendMessage = async (content: string) => {
        if (!content.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            content,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue("")
        setIsTyping(true)

        // Simulate typing delay
        setTimeout(() => {
            const botResponse = getBotResponse(content)
            setMessages((prev) => [...prev, botResponse])
            setIsTyping(false)
        }, 1000)
    }

    const handleQuickAction = (action: string) => {
        handleSendMessage(action)
    }

    const handleActionClick = (url?: string, action?: () => void) => {
        if (url) {
            window.open(url, "_blank")
        } else if (action) {
            action()
        }
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 font-mono">
            {/* Chat Button */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    <MessageCircle className="h-6 w-6 text-white" />
                </Button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <Card
                    className={`w-80 sm:w-96 bg-white shadow-2xl border-0 overflow-hidden transition-all duration-300 ${isMinimized ? "h-16" : "h-[500px]"
                        }`}
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Assistant Dirane</h3>
                                    <p className="text-xs opacity-90 flex items-center gap-2">
                                        <span className="block">En ligne</span>
                                        <span className="block size-3 rounded-full bg-green-400"></span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                                >
                                    {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsOpen(false)}
                                    className="text-white hover:bg-white/20 h-8 w-8 p-0"
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {!isMinimized && (
                        <>
                            {/* Messages */}
                            <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-80">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-3 rounded-2xl ${message.sender === "user"
                                                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                                                    : "bg-gray-100 text-gray-800"
                                                }`}
                                        >
                                            <p className="text-sm">{message.content}</p>
                                            {message.actions && (
                                                <div className="mt-3 space-y-2">
                                                    {message.actions.map((action, index) => (
                                                        <Button
                                                            key={index}
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => handleActionClick(action.url, action.action)}
                                                            className="w-full justify-start text-xs bg-white hover:bg-gray-50"
                                                        >
                                                            {action.icon}
                                                            <span className="ml-2">{action.label}</span>
                                                        </Button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-gray-100 p-3 rounded-2xl">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div
                                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: "0.1s" }}
                                                ></div>
                                                <div
                                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: "0.2s" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Quick Actions */}
                            <div className="px-4 pb-2">
                                <div className="flex flex-wrap gap-2">
                                    {quickActions.map((action, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="cursor-pointer hover:bg-blue-100 transition-colors text-xs"
                                            onClick={() => handleQuickAction(action.label)}
                                        >
                                            {action.icon}
                                            <span className="ml-1">{action.label}</span>
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Input */}
                            <div className="p-4 border-t bg-gray-50">
                                <div className="flex space-x-2">
                                    <Input
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Tapez votre message..."
                                        className="flex-1 border-gray-200 focus:border-blue-500"
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter") {
                                                handleSendMessage(inputValue)
                                            }
                                        }}
                                    />
                                    <Button
                                        onClick={() => handleSendMessage(inputValue)}
                                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                                        size="sm"
                                    >
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </Card>
            )}
        </div>
    )
}
