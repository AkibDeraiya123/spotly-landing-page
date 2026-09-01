import { redirect } from 'next/navigation';
import { routes } from '@/config/navigation';

export default function RootPage() {
  redirect(routes.home);
}
