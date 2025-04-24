import Image from 'next/image';
import Link from 'next/link';

export default function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/+4917687121255"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-5 rounded-full transform transition-transform hover:scale-125"
        >
            <Image
                src="./images/whatsap2.png"
                alt="Logo Psicóloga"
                width={60}
                height={60}
            />
        </Link>
    );
}
