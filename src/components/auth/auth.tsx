"use client"; // Menandakan ini Client Component, karena menggunakan useState dan useEffect
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/navigation"; // Hook untuk navigasi programatik
import { toast } from "react-toastify";

// Definisi tipe konteks otentikasi
interface AuthContextType {
  login: (username: string, password: string) => Promise<void>; // Fungsi login
  register: (
    name: string,
    email: string,
    password: string,
    role: string,
  ) => Promise<void>; // Fungsi register
  logout: () => void; // Fungsi logout
}

// Inisialisasi context dengan default kosong
const AuthContext = createContext<AuthContextType>({
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

// Provider komponen yang membungkus seluruh aplikasi
export function AuthProvider({ children }: { children: ReactNode }) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/`;
  const [name, setName] = useState<string | null>(null); // State menyimpan token
  const [role, setRole] = useState<string | null>(null); // State menyimpan token
  const [iduser, setIduser] = useState<string | null>(null); // State menyimpan token
  const router = useRouter(); // Hook navigasi
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const name = localStorage.getItem("name_user");
    const role = localStorage.getItem("role");
    const id = localStorage.getItem("id_user");
    if (name && role && id) {
      setName(name);
      setRole(role);
      setIduser(id);
    }
    setIsLoading(false); // Selesai cek localStorage
  }, []);

  useEffect(() => {
    if (!isLoading && (!name || !role || !iduser)) {
      toast.info("Silahkan Login Terlebih Dahulu", {
        theme: "dark",
      });
      router.push("/signin");
    }
  }, [isLoading, name, role, iduser, router]);
  // ...existing code...

  // Fungsi login: kirim email/password ke API, simpan token, redirect
  const login = async (email: string, password: string) => {
    const res = await fetch(`${url}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log("Status:", res.status); // <- Tambahkan ini
    console.log("Data:", data);
    console.log(data.user.id);
    if (res.status === 201 || res.status === 200) {
      setName(data.user.name);
      setRole(data.user.role);
      setIduser(data.user.id);
      localStorage.setItem("name_user", data.user.name);
      localStorage.setItem("role", data.user.role);
      localStorage.setItem("id_user", data.user.id);
      router.push("/"); // Arahkan ke halaman utama
    } else {
      throw new Error(data.message || "Login failed"); // Lempar error jika gagal
    }
  };

  // Fungsi register: kirim data, lalu otomatis login jika sukses
  const register = async (
    name: string,
    email: string,
    password: string,
    role: string,
  ) => {
    const res = await fetch(`${url}register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    const data = await res.json();
    if (res.status === 201 || res.status === 200) {
      // Jika pendaftaran sukses, panggil login untuk autentikasi otomatis
      await login(email, password);
    } else {
      throw new Error(data.message || "Register failed");
    }
  };

  // Fungsi logout: hapus token dan redirect ke halaman login
  const logout = () => {
    setIduser(null); // Reset state
    setName(null); // Reset state
    setRole(null); // Reset state
    localStorage.removeItem("name_user");
    localStorage.removeItem("role");
    localStorage.removeItem("id_user");
    // Hapus dari localStorage
    router.push("/signin"); // Arahkan ke login
  };

  return (
    <AuthContext.Provider value={{ login, register, logout }}>
      {children} {/* Render aplikasi di dalam provider */}
    </AuthContext.Provider>
  );
}

// Custom Hook untuk mengakses konteks dengan mudah
export const useAuth = () => useContext(AuthContext);
