#!/usr/bin/ruby -w

$LOAD_PATH << '.'

require 'variables.rb'

require 'net/smtp'

$master = nil

$master = 0

$debug = nil

_var = "I'm a local variable."
@var = "I'm an instance variable."
@@var = "I'm a class variable."
$var = "I'm a global variable."

if $debug
   puts _var
   puts @var
   puts @@var
   puts $var
end

class Customer
   VAR1 = 100
   VAR2 = 200
   CONST = "I'm a constant variable."
   @@num_customers = 0

   def initialize(id, name, addr)
      @@num_customers += 1

      @customer_id = id
      @customer_name = name
      @customer_addr = addr

      $master = $master + 1

      print "[#$master] New customer [#{name}] and VAR1: #{VAR1} also VAR2 is #{VAR2}.\n"
   end

   def death
      print "Customer [#@customer_name] is no more.\n"
   end

   def details
      print "Customer [#@customer_id] [#@customer_name] [#@customer_addr].\n"
   end

   def total_num_of_customers()
      puts "Total number of customers is #@@num_customers.\n"
   end
end

customer1 = Customer. new("1", "William Valhakis", "Lotr Apartments, Albania")
customer2 = Customer. new("2", "Thomas Windburn", "Shopment Park, Heaven")

customer1.death
customer2.death()

customer1.details
customer2.details

customer1.total_num_of_customers();

if $debug
   puts "I'm not ruby!"

   print <<EOF
   This is one line, and there
   are other lines too, so that you know.
EOF

end

BEGIN {
   puts "I'm the BEGIN you know right."
}

name = "William Valhakis" # This is my name

print "My name is ", name, ".\n"

=begin
This is a comment.
This is a comment.
This is a comment.
This is a comment.
=end

END {
   puts "I'm the END you must know me."
}

puts "Multiplication value is #{10 * 10 * 10}.\n"

items = ["keyboard", "mouse", "monitor"]

print "Items are following: "
items.each do |i|
   print i, ", "
end
print "\n"

# Ruby Hashes
hsh = colors = { "red" => 0xf00, "green" => 0x0f0, "blue" => 0x00f }

hsh.each do |key, value|
   print "[#{key} is #{value}] "
end
print "\n"

print colors, "\n"

# Ruby Ranges
(10..20).each do |n|
   print "#{n}, "
end
print "\n"

# Assignment and stuff
a, b, c = 10, 20, 30

print "#{a}, #{b}, #{c}\n"

print defined? colors, "\n"

COUNT = 0

module Food
   COUNT = 0
   ::COUNT = 1
   COUNT = 2
end

puts "COUNT-> #{COUNT}, Food::COUNT -> #{Food::COUNT}\n"

if COUNT > 0
   puts "COUNT is greater than 0."
elsif COUNT < 10
   puts "COUNT is less than 10."
else
   puts "I have no idea what COUNT is."
end

unless COUNT > 10
   puts "COUNT is lower than 10."
else
   puts "COUNT is higher than 10."
end

$variable = nil
print "What is this string of text.\n" if $variable

age = 10

case age
when 0 .. 2
   print "But ur just a baby.\n"
when 3 .. 6
   print "You are a little child.\n"
when 7 .. 12
   print "You are almost a youth.\n"
else
   print "What are you, i'm so confused kind hooman?\n"
end

# My little loops
$i = 0
$n = 3

if $debug
   while $i < $n do
      puts "I'm inside the loop mom."
      $i += 1;
   end

   begin
      puts "I'm still inside the loop mom."
      $i += 1;
   end while $i < $n

   $i = 0
   $n = 3

   until $i > $n do
      puts "Am I still inside the loop? mom."
      $i += 1;
   end

   for i in 0 .. 3
      print "I'm inside the for loop now. [#{i}]\n"
   end

   (0..3).each do |x|
      print "I'm inside the each loop now, what the heck. [#{x}]\n"
      if x > 1 then
         break
      end
   end
end

def greet(name="Anna Aundeberg")
   puts "Welcome to the hell #{name}."
end

greet "William Valhakis"
greet

def number(n=0)
   return n * n
end

print "Number 5 now is #{number(5)}\n"

def simple(*arg)
   print "The number of parameters is #{arg.length}\n"
   for i in 0..arg.length
      print "Parameter [i] is [#{arg[i]}]\n"
   end
end

simple "one", "two", "three"

print "Number of lives is #$lives\n"

message = <<MESSAGE_END
From: Private Person <ruudi170@gmail.com>
To: A Hooman <ruudi170@gmail.com>
Subject: SMTP E-Mail Example

This is my email to you.
MESSAGE_END

begin
   Net::SMTP.start('localhost') do |smtp|
      smtp.send_message message, 'ruudi170@gmail.com', 'ruudi170@gmail.com'
   end
rescue Exception => e
   print "Exception occured: #{e}\n"
end
