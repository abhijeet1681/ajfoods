import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing user session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate authentication
      if (email === 'demo@eatfit.com' && password === 'demo123') {
        const userData = {
          id: '1',
          name: 'Demo User',
          email: email,
          phone: '+91 9876543210',
          addresses: [
            {
              id: 1,
              type: 'Home',
              address: '123 Food Street, Mumbai, Maharashtra 400001',
              isDefault: true
            }
          ]
        };
        
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true, user: userData };
      } else {
        return { success: false, error: 'Invalid credentials' };
      }
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const signup = async (userData) => {
    try {
      // In a real app, this would be an API call
      const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        addresses: []
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: 'Signup failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const addAddress = (address) => {
    const updatedUser = {
      ...user,
      addresses: [...user.addresses, { ...address, id: Date.now() }]
    };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    isLoading,
    login,
    signup,
    logout,
    updateProfile,
    addAddress,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};