// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogPortal, DialogOverlay } from '@/components/ui/dialog';
// import * as DialogPrimitive from '@radix-ui/react-dialog';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import Image, { StaticImageData } from 'next/image';
// import FadeIn from '@/components/animations/fade-in';
// import { motion } from 'framer-motion';
// import { useState } from 'react';

// type ProductCardProps = {
//   id: number;
//   coverImg: StaticImageData;
//   tags: string[];
//   onPasswordSubmit?: (id: number, password: string) => void;
// };

// export default function ProductCard({ coverImg, tags, id, onPasswordSubmit }: ProductCardProps) {
//   const delay = 0.1 + ((id - 1) % 4) * 0.1;
//   const [isHovered, setIsHovered] = useState(false);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [password, setPassword] = useState('');

//   const createGradientWithGaps = (angle: number) => {
//     return `conic-gradient(from ${angle}deg, 
//       #6EE7B7 0deg 30deg, 
//       #CCF544 30deg 120deg,
//       #FFC548 120deg 210deg, 
//       transparent 210deg 360deg
//     )`;
//   };

//   const handleCardClick = () => {
//     setIsDialogOpen(true);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password.trim()) {
//       onPasswordSubmit?.(id, password);
//       setPassword('');
//       setIsDialogOpen(false);
//       // Here you can handle the password verification
//       // and navigate to the detail page or perform other actions
//     }
//   };

//   return (
//     <>
//       <FadeIn delay={delay}>
//         <Card className="w-full cursor-pointer border-none bg-transparent pt-0" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleCardClick}>
//           <motion.div
//             className="relative w-full min-h-[165px] rounded-[8px] p-[2px]"
//             style={{
//               background: isHovered ? createGradientWithGaps(0) : 'transparent'
//             }}
//             animate={
//               isHovered
//                 ? {
//                     background: [createGradientWithGaps(0), createGradientWithGaps(360)],
//                     scale: 0.98
//                   }
//                 : {
//                     scale: 1
//                   }
//             }
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: 'linear',
//               scale: {
//                 duration: 0.3,
//                 ease: 'easeInOut'
//               }
//             }}
//           >
//             <div className="w-full h-full rounded-[6px] overflow-hidden bg-white relative">
//               <Image src={coverImg} width={297} height={222.75} className="w-full object-cover" alt="card image" />
//               <p className="absolute z-10 bottom-5 text-white left-5 text-sm font-medium leading-[20px]">{}</p>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-b from-neutral-950/0 to-neutral-950/100"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: isHovered ? 0.3 : 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>
//           </motion.div>

//           <CardContent className="flex flex-wrap items-start justify-start gap-1.5 p-0 mt-2">
//             {tags.map(tag => (
//               <Badge variant="tagsStyle" key={tag}>
//                 {tag}
//               </Badge>
//             ))}
//           </CardContent>
//         </Card>
//       </FadeIn>

//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogPortal>
//           <DialogOverlay className="bg-[#0A0A0A]" />
//           <DialogPrimitive.Content className="bg-transparent data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-[392px]">
//             {/* <DialogPrimitive.Close
//               className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
//               style={{ display: 'none' }}
//             >
//               <XIcon />
//               <span className="sr-only">Close</span>
//             </DialogPrimitive.Close> */}

//             <DialogHeader>
//               <DialogTitle>Enter Password</DialogTitle>
//               <DialogDescription>Please enter the password to view this project.</DialogDescription>
//             </DialogHeader>

//             <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input id="password" type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} autoFocus />
//               </div>
//               <div className="flex justify-end gap-3">
//                 <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
//                   Cancel
//                 </Button>
//                 <Button type="submit">Submit</Button>
//               </div>
//             </form>
//           </DialogPrimitive.Content>
//         </DialogPortal>
//       </Dialog>
//     </>
//   );
// }
