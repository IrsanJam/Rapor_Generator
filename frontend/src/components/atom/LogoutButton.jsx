import React from 'react';
import Swal from 'sweetalert2';

const LogoutButton = () => {
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of the application.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#313e4a',
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic untuk logout, misalnya clear token dan redirect
        Swal.fire('Logged out!', 'You have been logged out.', 'info');
        // Contoh redirect setelah logout
        window.location.href = '/';
      }
    });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
