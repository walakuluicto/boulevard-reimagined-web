
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageHeader from '@/components/shared/PageHeader';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

// Define the form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  location: z.string({ required_error: 'Please select a location' }),
  people: z.string({ required_error: 'Please select number of guests' }),
  date: z.date({ required_error: 'Please select a date' }),
  time: z.string({ required_error: 'Please select a time' }),
  specialRequirements: z.object({
    accessibility: z.boolean().default(false).optional(),
    dietary: z.boolean().default(false).optional(),
    occasion: z.boolean().default(false).optional(),
    outdoor: z.boolean().default(false).optional(),
  }),
  additionalNotes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const timeSlots = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM'
];

export default function ReservePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      location: '',
      people: '',
      specialRequirements: {
        accessibility: false,
        dietary: false,
        occasion: false,
        outdoor: false,
      },
      additionalNotes: '',
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log('Reservation data:', data);
      
      // Format the data for the email
      const formattedDate = format(data.date, 'MMMM dd, yyyy');
      const specialReqs = Object.entries(data.specialRequirements)
        .filter(([_, value]) => value)
        .map(([key]) => {
          switch(key) {
            case 'accessibility': return 'Wheelchair accessibility';
            case 'dietary': return 'Dietary needs';
            case 'occasion': return 'Special occasion';
            case 'outdoor': return 'Outdoor seating';
            default: return '';
          }
        })
        .filter(Boolean)
        .join(', ');
      
      // Normally, you would send this to a server endpoint, but for now we'll simulate sending an email
      // In production, you would integrate with a backend email service or API
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Reservation submitted!', {
        description: 'We will contact you shortly to confirm your reservation.',
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error('Error submitting reservation:', error);
      toast.error('Failed to submit reservation', {
        description: 'Please try again later or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine which days should be disabled (past dates)
  const disabledDays = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <>
      <Navbar />
      <PageHeader
        title="Reserve a Table"
        subtitle="Book your BLVD experience"
        backgroundImage="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="section-padding bg-[#f8f7f5]">
        <div className="blvd-container">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-display mb-6 text-center">Make a Reservation</h2>
            <p className="text-center text-blvd-charcoal/80 mb-8">
              Please fill out the form below to reserve your table. We'll contact you to confirm your reservation.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Phone Field */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Location Field */}
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="location1">Location 1</SelectItem>
                            <SelectItem value="location2">Location 2</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Number of People Field */}
                  <FormField
                    control={form.control}
                    name="people"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Guests</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select number of guests" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'Person' : 'People'}
                              </SelectItem>
                            ))}
                            <SelectItem value="more">More than 10</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Field */}
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "MMMM d, yyyy")
                                ) : (
                                  <span>Select a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={disabledDays}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Time Field */}
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a time" />
                              <Clock className="ml-auto h-4 w-4 opacity-50" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Special Requirements */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Special Requirements</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="specialRequirements.accessibility"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blvd-gold focus:ring-blvd-gold"
                              checked={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Wheelchair accessibility</FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="specialRequirements.dietary"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blvd-gold focus:ring-blvd-gold"
                              checked={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Dietary needs</FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="specialRequirements.occasion"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blvd-gold focus:ring-blvd-gold"
                              checked={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Special occasion</FormLabel>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="specialRequirements.outdoor"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                          <FormControl>
                            <input
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-blvd-gold focus:ring-blvd-gold"
                              checked={field.value}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">Outdoor seating</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Additional Notes */}
                <FormField
                  control={form.control}
                  name="additionalNotes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any additional information or special requests" 
                          className="resize-none min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-blvd-gold hover:bg-blvd-gold/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Reserve Table"}
                </Button>
                
                <p className="text-sm text-blvd-charcoal/70 text-center">
                  We'll send a confirmation to your phone. By making this reservation, you agree to our reservation policy.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
