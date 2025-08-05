import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, X, Send, CheckCheck, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 Welcome to Boat Sitter Boat Care Service. How can we help you today?",
      isBot: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      // Simulate typing indicator when chat opens
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now(),
            text: "I'm here to help with all your marine needs! Feel free to ask about our services or get a quick quote. 🚤",
            isBot: true,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }]);
        }, 2000);
      }, 1000);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Please fill all fields",
        description: "Name, email and message are required",
        variant: "destructive",
      });
      return;
    }

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: message,
      isBot: false,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: `Thanks ${name}! 🙏 We've received your message and will contact you soon at ${email}. For urgent matters, please call us directly via WhatsApp!`,
        isBot: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      
      toast({
        title: "Message Sent! ✅",
        description: "We'll respond to you quickly via WhatsApp or email.",
      });
      setIsLoading(false);
    }, 2000);
  };

  const quickReplies = [
    "Get a quote",
    "Emergency service",
    "Boat storage",
    "Repair services"
  ];

  const handleQuickReply = (reply: string) => {
    setMessage(reply);
  };

  return (
    <>
      {/* Floating Chat Button - WhatsApp Style */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <Button
            onClick={() => setIsOpen(true)}
            className="animate-pulse bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover:scale-110"
            size="lg"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            1
          </div>
          
          {/* Floating Message Preview */}
          {!isOpen && (
            <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs animate-fade-in">
              <div className="text-sm text-gray-800">
                👋 Need help with your boat? Chat with us!
              </div>
              <div className="w-3 h-3 bg-white transform rotate-45 absolute -bottom-1 right-4"></div>
            </div>
          )}
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[500px] flex flex-col">
          <Card className="shadow-2xl border-0 h-full flex flex-col">
            {/* Header - WhatsApp Style */}
            <CardHeader className="bg-[#075E54] text-white rounded-t-lg p-4 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Boat Sitter Support</div>
                    <div className="text-xs text-green-200">Online • Typically replies instantly</div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            {/* Messages Area */}
            <div className="flex-1 p-4 bg-[#ECE5DD] overflow-y-auto space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                      msg.isBot
                        ? 'bg-white text-gray-800'
                        : 'bg-[#DCF8C6] text-gray-800'
                    }`}
                  >
                    <div className="text-sm">{msg.text}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs text-gray-500">{msg.time}</span>
                      {!msg.isBot && <CheckCheck className="h-3 w-3 text-blue-500" />}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Quick Replies */}
            <div className="px-4 py-2 bg-white border-t flex gap-2 overflow-x-auto">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full whitespace-nowrap hover:bg-gray-200 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
            
            {/* Input Form */}
            <CardContent className="p-4 bg-white rounded-b-lg flex-shrink-0">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                    className="text-sm"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="text-sm"
                  />
                </div>
                
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isLoading}
                    rows={2}
                    className="flex-1 text-sm resize-none"
                  />
                  <Button
                    type="submit"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white px-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Clock className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBox;