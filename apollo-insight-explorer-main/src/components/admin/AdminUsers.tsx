
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

const AdminUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Load users from localStorage
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const makeAdmin = (userId: string) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, role: 'admin' as const } : user
    );
    
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    toast({
      title: "Role Updated",
      description: "User is now an admin.",
    });
  };

  const makeUser = (userId: string) => {
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, role: 'user' as const } : user
    );
    
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    toast({
      title: "Role Updated",
      description: "Admin is now a regular user.",
    });
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === 'admin' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  {user.role === 'user' ? (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-purple-500 text-purple-500 hover:bg-purple-50"
                      onClick={() => makeAdmin(user.id)}
                    >
                      Make Admin
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-blue-500 text-blue-500 hover:bg-blue-50"
                      onClick={() => makeUser(user.id)}
                    >
                      Make User
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                No users found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminUsers;
